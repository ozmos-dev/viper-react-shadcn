<?php

return new class {
  #[\Ozmos\Viper\Attrs\Action]
  public function resetPassword(
    \App\Data\Requests\ChangePasswordRequest $request
  ) {
    if (
      !\Illuminate\Support\Facades\Hash::check(
        $request->old_password,
        request()->user()->password
      )
    ) {
      throw \Illuminate\Validation\ValidationException::withMessages([
        'old_password' => ['Incorrect password'],
      ]);
    }

    request()
      ->user()
      ->update(['password' => $request->new_password]);
  }
};
