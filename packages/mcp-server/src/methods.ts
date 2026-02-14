// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.accounts.retrieve',
    fullyQualifiedName: 'accounts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/account',
  },
  {
    clientCallName: 'client.balance.retrieve',
    fullyQualifiedName: 'balance.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/balance',
  },
  {
    clientCallName: 'client.coupons.create',
    fullyQualifiedName: 'coupons.create',
    httpMethod: 'post',
    httpPath: '/v1/coupons',
  },
  {
    clientCallName: 'client.coupons.list',
    fullyQualifiedName: 'coupons.list',
    httpMethod: 'get',
    httpPath: '/v1/coupons',
  },
  {
    clientCallName: 'client.customers.create',
    fullyQualifiedName: 'customers.create',
    httpMethod: 'post',
    httpPath: '/v1/customers',
  },
  {
    clientCallName: 'client.customers.list',
    fullyQualifiedName: 'customers.list',
    httpMethod: 'get',
    httpPath: '/v1/customers',
  },
  {
    clientCallName: 'client.disputes.update',
    fullyQualifiedName: 'disputes.update',
    httpMethod: 'post',
    httpPath: '/v1/disputes/{dispute}',
  },
  {
    clientCallName: 'client.disputes.list',
    fullyQualifiedName: 'disputes.list',
    httpMethod: 'get',
    httpPath: '/v1/disputes',
  },
  {
    clientCallName: 'client.invoices.create',
    fullyQualifiedName: 'invoices.create',
    httpMethod: 'post',
    httpPath: '/v1/invoices',
  },
  {
    clientCallName: 'client.invoices.list',
    fullyQualifiedName: 'invoices.list',
    httpMethod: 'get',
    httpPath: '/v1/invoices',
  },
  {
    clientCallName: 'client.invoices.finalize',
    fullyQualifiedName: 'invoices.finalize',
    httpMethod: 'post',
    httpPath: '/v1/invoices/{invoice}/finalize',
  },
  {
    clientCallName: 'client.invoiceitems.create',
    fullyQualifiedName: 'invoiceitems.create',
    httpMethod: 'post',
    httpPath: '/v1/invoiceitems',
  },
  {
    clientCallName: 'client.paymentLinks.create',
    fullyQualifiedName: 'paymentLinks.create',
    httpMethod: 'post',
    httpPath: '/v1/payment_links',
  },
  {
    clientCallName: 'client.paymentIntents.list',
    fullyQualifiedName: 'paymentIntents.list',
    httpMethod: 'get',
    httpPath: '/v1/payment_intents',
  },
  {
    clientCallName: 'client.prices.create',
    fullyQualifiedName: 'prices.create',
    httpMethod: 'post',
    httpPath: '/v1/prices',
  },
  {
    clientCallName: 'client.prices.list',
    fullyQualifiedName: 'prices.list',
    httpMethod: 'get',
    httpPath: '/v1/prices',
  },
  {
    clientCallName: 'client.products.create',
    fullyQualifiedName: 'products.create',
    httpMethod: 'post',
    httpPath: '/v1/products',
  },
  {
    clientCallName: 'client.products.list',
    fullyQualifiedName: 'products.list',
    httpMethod: 'get',
    httpPath: '/v1/products',
  },
  {
    clientCallName: 'client.refunds.create',
    fullyQualifiedName: 'refunds.create',
    httpMethod: 'post',
    httpPath: '/v1/refunds',
  },
  {
    clientCallName: 'client.subscriptions.update',
    fullyQualifiedName: 'subscriptions.update',
    httpMethod: 'post',
    httpPath: '/v1/subscriptions/{subscription_exposed_id}',
  },
  {
    clientCallName: 'client.subscriptions.list',
    fullyQualifiedName: 'subscriptions.list',
    httpMethod: 'get',
    httpPath: '/v1/subscriptions',
  },
  {
    clientCallName: 'client.subscriptions.cancel',
    fullyQualifiedName: 'subscriptions.cancel',
    httpMethod: 'delete',
    httpPath: '/v1/subscriptions/{subscription_exposed_id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
