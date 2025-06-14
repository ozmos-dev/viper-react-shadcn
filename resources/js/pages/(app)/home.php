<?php

return new #[\Ozmos\Viper\Attrs\Title('Home')] #[
  \Ozmos\Viper\Attrs\Name('home')
]
class {
  #[\Ozmos\Viper\Attrs\Prop]
  public function serverTime(): string
  {
    return now()->toIso8601String();
  }

  #[\Ozmos\Viper\Attrs\Prop(lazy: true)]
  public function lazyServerTime(): string
  {
    sleep(1);
    return now()->toIso8601String();
  }

  #[\Ozmos\Viper\Attrs\Action]
  public function formsTest()
  {
    // allow loading indicator to show
    sleep(1);

    request()->validate([
      'number' => ['required', 'numeric', 'min:10'],
    ]);
  }
};
