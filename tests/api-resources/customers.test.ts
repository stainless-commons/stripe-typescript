// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stripe from '@stainless-commons/stripe';

const client = new Stripe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  test('create', async () => {
    const responsePromise = client.customers.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.create(
        {
          address: '',
          balance: 0,
          business_name: '',
          cash_balance: { settings: { reconciliation_mode: 'automatic' } },
          description: 'description',
          email: 'email',
          expand: ['string'],
          individual_name: '',
          invoice_prefix: 'invoice_prefix',
          invoice_settings: {
            custom_fields: '',
            default_payment_method: 'default_payment_method',
            footer: 'footer',
            rendering_options: '',
          },
          metadata: '',
          name: 'name',
          next_invoice_sequence: 0,
          payment_method: 'payment_method',
          phone: 'phone',
          preferred_locales: ['string'],
          shipping: '',
          source: 'source',
          tax: { ip_address: '', validate_location: 'deferred' },
          tax_exempt: '',
          tax_id_data: [{ type: 'ad_nrt', value: 'value' }],
          test_clock: 'test_clock',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stripe.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.customers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.customers.list(
        {
          created: {
            gt: 0,
            gte: 0,
            lt: 0,
            lte: 0,
          },
          email: 'email',
          ending_before: 'ending_before',
          expand: ['string'],
          limit: 0,
          starting_after: 'starting_after',
          test_clock: 'test_clock',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stripe.NotFoundError);
  });
});
