<?php

use Ozmos\Viper\Attrs;
use App\Data\Requests\ForgotPasswordRequest;
use Illuminate\Validation\ValidationException;

return new #[Attrs\Name('password.request')] class {
  #[Attrs\Action]
  public function sendResetLink(ForgotPasswordRequest $request)
  {
    $status = \Password::sendResetLink($request->toArray());

    if ($status === \Password::ResetLinkSent) {
      return ['message' => __($status)];
    }

    throw ValidationException::withMessages([
      'email' => [__($status)],
    ]);
  }
};
