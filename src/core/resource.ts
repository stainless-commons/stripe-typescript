// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { StripeMinimal } from '../client';

export abstract class APIResource {
  protected _client: StripeMinimal;

  constructor(client: StripeMinimal) {
    this._client = client;
  }
}
