<?php

namespace App\Data\Requests;

use Spatie\LaravelData\Data;
use Spatie\LaravelData\Support\Validation\ValidationContext;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class RegisterRequest extends Data
{
  public function __construct(
    public string $name,
    public string $email,
    public string $password
  ) {}

  public static function rules(ValidationContext $context): array
  {
    return [
      'name' => ['required', 'string'],
      'email' => [
        'required',
        'string',
        'email',
        'unique:users,email,' . auth()->id(),
      ],
      'password' => ['required', 'string'],
    ];
  }
}
