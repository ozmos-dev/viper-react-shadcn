<?php

use Illuminate\Auth\Events\PasswordReset;
use Ozmos\Viper\Attrs\Name;
use Ozmos\Viper\Attrs\Action;
use Ozmos\Viper\Attrs\Prop;
use App\Data\Requests\ResetPasswordRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

return new #[Name('password.reset')] class {
  #[Prop]
  public function email(): string
  {
    return request()->query('email');
  }

  #[Action]
  public function resetPassword(ResetPasswordRequest $request, string $token)
  {
    $status = Password::reset(
      [...$request->toArray(), 'token' => $token],
      function (\App\Models\User $user, string $password) {
        $user
          ->forceFill([
            'password' => Hash::make($password),
          ])
          ->setRememberToken(Str::random(60));
        $user->save();
        event(new PasswordReset($user));
      },
    );

    if ($status === Password::PASSWORD_RESET) {
      return ['message' => __($status)];
    }

    throw ValidationException::withMessages([
      'email' => [__($status)],
    ]);
  }
};
