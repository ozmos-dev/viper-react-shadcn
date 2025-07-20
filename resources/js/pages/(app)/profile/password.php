<?php

use Ozmos\Viper\Attrs\Action;
use App\Data\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

return new class {
  #[Action]
  public function resetPassword(ChangePasswordRequest $request)
  {
    if (!Hash::check($request->old_password, request()->user()->password)) {
      throw ValidationException::withMessages([
        'old_password' => ['Incorrect password'],
      ]);
    }

    request()
      ->user()
      ->update(['password' => $request->new_password]);
  }
};
