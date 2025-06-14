<?php

use Illuminate\Http\Request;
use Ozmos\Viper\Attrs;
use App\Data\Requests\LoginRequest;
use Illuminate\Validation\ValidationException;

return new #[Attrs\Name('login')] class {
  #[Attrs\Action]
  public function login(LoginRequest $request)
  {
    if (!auth()->attempt($request->toArray())) {
      throw ValidationException::withMessages([
        'email' => ['Invalid username or password'],
      ]);
    }
  }
};
