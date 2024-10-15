import * as grpc from '@grpc/grpc-js';

export function createApiKeyInterceptor(apiKey: string, apiKeyName: string = 'x-api-key') {
    return function apiKeyInterceptor(options: any, nextCall: any) {
        var requester = {
            start: function (metadata: any, listener: any, next: any) {
                if (metadata.get(apiKeyName) == false) {
                    metadata.add(apiKeyName, apiKey);
                }
                var newListener = {
                    onReceiveMetadata: function (metadata: any, next: any) {
                        next(metadata);
                    },
                    onReceiveMessage: function (message: any, next: any) {
                        next(message);
                    },
                    onReceiveStatus: function (status: any, next: any) {
                        next(status);
                    },
                };
                next(metadata, newListener);
            },
        };
        return new grpc.InterceptingCall(nextCall(options), requester);
    };
}
