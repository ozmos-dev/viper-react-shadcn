<?php

use App\Data\UserData;
use Ozmos\Viper\Attrs;

return new #[Attrs\Middleware(['auth'])] class {
  #[Attrs\Prop]
  public function user(): UserData
  {
    return UserData::from(request()->user());
  }

  #[Attrs\Action]
  public function logout()
  {
    auth()->logout();
  }

  #[Attrs\Action]
  public function confirmPassword()
  {
    if (!\Hash::check(request()->password, request()->user()->password)) {
      throw \Illuminate\Validation\ValidationException::withMessages([
        'password' => ['Invalid password'],
      ]);
    }

    request()->session()->passwordConfirmed();

    return ['ok' => true];
  }
};
