<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Ozmos\Viper\Facades\Viper;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    Viper::autoDiscoverModels();
  }
}
