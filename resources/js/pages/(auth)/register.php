<?php

use Ozmos\Viper\Attrs\Name;
use Ozmos\Viper\Attrs\Action;
use App\Data\Requests\RegisterRequest;
use App\Models\User;

return new #[Name('register')] class {
  #[Action]
  public function register(RegisterRequest $request)
  {
    $user = User::create($request->toArray());
    auth()->login($user);
  }
};
