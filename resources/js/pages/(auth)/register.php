<?php

use Ozmos\Viper\Attrs;
use App\Data\Requests\RegisterRequest;
use App\Models\User;

return new #[Attrs\Name('register')] class {
  #[Attrs\Action]
  public function register(RegisterRequest $request)
  {
    $user = User::create($request->toArray());
    auth()->login($user);
  }
};
