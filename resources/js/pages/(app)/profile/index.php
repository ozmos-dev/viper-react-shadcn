<?php

use Ozmos\Viper\Attrs\Name;
use Ozmos\Viper\Attrs\Action;
use App\Data\Requests\UpdateProfileRequest;

return new #[Name('profile')] class {
  #[Action]
  public function updateUser(UpdateProfileRequest $request)
  {
    auth()->user()->update($request->toArray());
  }

  #[Action]
  public function deleteUser()
  {
    auth()->user()->delete();
    auth()->logout();
  }
};
