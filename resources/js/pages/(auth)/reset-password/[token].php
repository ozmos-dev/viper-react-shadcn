<?php

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Ozmos\Viper\Attrs;
use App\Data\Requests\ResetPasswordRequest;
use Illuminate\Validation\ValidationException;

return new #[Attrs\Name('password.reset')] class {
  #[Attrs\Prop]
  public function email(): string
  {
    return request()->query('email');
  }

  #[Attrs\Action]
  public function resetPassword(ResetPasswordRequest $request, string $token)
  {
    $status = \Password::reset(
      [...$request->toArray(), 'token' => $token],
      function (\App\Models\User $user, string $password) {
        $user
          ->forceFill([
            'password' => \Hash::make($password),
          ])
          ->setRememberToken(\Str::random(60));
        $user->save();
        event(new PasswordReset($user));
      }
    );

    if ($status === \Password::PASSWORD_RESET) {
      return ['message' => __($status)];
    }

    throw ValidationException::withMessages([
      'email' => [__($status)],
    ]);
  }
};
