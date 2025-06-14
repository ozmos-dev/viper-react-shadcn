<?php

return new #[\Ozmos\Viper\Attrs\Name('profile')] class {
  #[\Ozmos\Viper\Attrs\Action]
  public function updateUser(\App\Data\Requests\UpdateProfileRequest $request)
  {
    auth()->user()->update($request->toArray());
  }

  #[\Ozmos\Viper\Attrs\Action]
  public function deleteUser()
  {
    auth()->user()->delete();
    auth()->logout();
  }
};
