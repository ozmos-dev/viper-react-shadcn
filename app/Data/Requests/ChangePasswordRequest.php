<?php

namespace App\Data\Requests;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\Support\Validation\ValidationContext;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class ChangePasswordRequest extends Data
{
  public function __construct(
    public string $old_password,
    public string $new_password
  ) {}

  public static function rules(ValidationContext $context): array
  {
    return [
      'old_password' => ['required', 'string'],
      'new_password' => ['required', 'string'],
    ];
  }
}
