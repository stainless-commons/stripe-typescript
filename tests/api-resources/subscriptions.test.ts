// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stripe from '@stainless-commons/stripe';

const client = new Stripe({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  test('update', async () => {
    const responsePromise = client.subscriptions.update('subscription_exposed_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.update(
        'subscription_exposed_id',
        {
          add_invoice_items: [
            {
              discounts: [
                {
                  coupon: 'coupon',
                  discount: 'discount',
                  promotion_code: 'promotion_code',
                },
              ],
              metadata: { foo: 'string' },
              period: {
                end: { type: 'min_item_period_end', timestamp: 0 },
                start: { type: 'max_item_period_start', timestamp: 0 },
              },
              price: 'price',
              price_data: {
                currency: 'currency',
                product: 'product',
                tax_behavior: 'exclusive',
                unit_amount: 0,
                unit_amount_decimal: 'unit_amount_decimal',
              },
              quantity: 0,
              tax_rates: '',
            },
          ],
          application_fee_percent: '',
          automatic_tax: {
            enabled: true,
            liability: { type: 'account', account: 'account' },
          },
          billing_cycle_anchor: 'now',
          billing_thresholds: '',
          cancel_at: '',
          cancel_at_period_end: true,
          cancellation_details: { comment: '', feedback: '' },
          collection_method: 'charge_automatically',
          days_until_due: 0,
          default_payment_method: 'default_payment_method',
          default_source: '',
          default_tax_rates: '',
          description: '',
          discounts: '',
          expand: ['string'],
          invoice_settings: {
            account_tax_ids: '',
            issuer: { type: 'account', account: 'account' },
          },
          items: [
            {
              id: 'id',
              billing_thresholds: '',
              clear_usage: true,
              deleted: true,
              discounts: '',
              metadata: '',
              price: 'price',
              price_data: {
                currency: 'currency',
                product: 'product',
                recurring: { interval: 'day', interval_count: 0 },
                tax_behavior: 'exclusive',
                unit_amount: 0,
                unit_amount_decimal: 'unit_amount_decimal',
              },
              quantity: 0,
              tax_rates: '',
            },
          ],
          metadata: '',
          off_session: true,
          on_behalf_of: '',
          pause_collection: '',
          payment_behavior: 'allow_incomplete',
          payment_settings: {
            payment_method_options: {
              acss_debit: '',
              bancontact: '',
              card: '',
              customer_balance: '',
              konbini: '',
              payto: '',
              sepa_debit: '',
              us_bank_account: '',
            },
            payment_method_types: '',
            save_default_payment_method: 'off',
          },
          pending_invoice_item_interval: '',
          proration_behavior: 'always_invoice',
          proration_date: 0,
          transfer_data: '',
          trial_end: 'now',
          trial_from_plan: true,
          trial_settings: { end_behavior: { missing_payment_method: 'cancel' } },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stripe.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.subscriptions.list();
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
      client.subscriptions.list(
        {
          automatic_tax: { enabled: true },
          collection_method: 'charge_automatically',
          created: {
            gt: 0,
            gte: 0,
            lt: 0,
            lte: 0,
          },
          current_period_end: {
            gt: 0,
            gte: 0,
            lt: 0,
            lte: 0,
          },
          current_period_start: {
            gt: 0,
            gte: 0,
            lt: 0,
            lte: 0,
          },
          customer: 'customer',
          customer_account: 'customer_account',
          ending_before: 'ending_before',
          expand: ['string'],
          limit: 0,
          price: 'price',
          starting_after: 'starting_after',
          status: 'active',
          test_clock: 'test_clock',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stripe.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = client.subscriptions.cancel('subscription_exposed_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscriptions.cancel(
        'subscription_exposed_id',
        {
          cancellation_details: { comment: '', feedback: '' },
          expand: ['string'],
          invoice_now: true,
          prorate: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stripe.NotFoundError);
  });
});
