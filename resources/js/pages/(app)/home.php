<?php

use Ozmos\Viper\Attrs\Title;
use Ozmos\Viper\Attrs\Name;
use Ozmos\Viper\Attrs\Prop;
use Ozmos\Viper\Attrs\Action;

return new #[Title('Home')] #[Name('home')] class {
  #[Prop]
  public function serverTime(): string
  {
    return now()->toIso8601String();
  }

  #[Prop(lazy: true)]
  public function lazyServerTime(): string
  {
    sleep(1);
    return now()->toIso8601String();
  }

  #[Action]
  public function formsTest()
  {
    // allow loading indicator to show
    sleep(1);

    request()->validate([
      'number' => ['required', 'numeric', 'min:10'],
    ]);
  }
};
