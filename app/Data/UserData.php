<?php

namespace App\Data;

use Carbon\Carbon;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class UserData extends Data
{
  public function __construct(
    public int $id,
    public string $name,
    public string $email,
    public Carbon $created_at,
    public Carbon $updated_at
  ) {}
}
