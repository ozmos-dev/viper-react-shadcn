<?php

use Ozmos\Viper\Attrs\Name;
use Ozmos\Viper\Attrs\Action;
use App\Data\Requests\ForgotPasswordRequest;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

return new #[Name('password.request')] class {
  #[Action]
  public function sendResetLink(ForgotPasswordRequest $request)
  {
    $status = Password::sendResetLink($request->toArray());

    if ($status === Password::ResetLinkSent) {
      return ['message' => __($status)];
    }

    throw ValidationException::withMessages([
      'email' => [__($status)],
    ]);
  }
};
