# MiniappDomainResponse

Response containing domain information, metadata, and validation errors if any

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Domain name | [default to undefined]
**fid** | **number** | FID associated with the domain | [default to undefined]
**manifest** | [**FarcasterManifest**](FarcasterManifest.md) |  | [default to undefined]
**home_url_metadata** | **{ [key: string]: any | null; }** | Home URL metadata if available | [optional] [default to undefined]
**created_at** | **string** | Creation timestamp | [default to undefined]
**updated_at** | **string** | Last update timestamp | [default to undefined]
**was_found** | **boolean** | Whether the domain was found in the table before processing | [default to undefined]
**was_refreshed** | **boolean** | Whether the domain was refreshed/updated during this request | [default to undefined]
**validation_errors** | **Array&lt;string&gt;** | Validation errors from processing, if any | [optional] [default to undefined]
**error_message** | **string** | High-level error message if processing failed | [optional] [default to undefined]

## Example

```typescript
import { MiniappDomainResponse } from './api';

const instance: MiniappDomainResponse = {
    domain,
    fid,
    manifest,
    home_url_metadata,
    created_at,
    updated_at,
    was_found,
    was_refreshed,
    validation_errors,
    error_message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
