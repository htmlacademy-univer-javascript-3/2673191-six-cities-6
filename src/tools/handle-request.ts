import axios, { AxiosResponse } from 'axios';

export default async function handleRequest<TModel, TErrorModel>(
  request: () => Promise<AxiosResponse<TModel>>,
  onSuccess: (data: TModel) => unknown,
  onStatus: { [status: number]: ((error: TErrorModel) => unknown) | undefined },
  onError: (err: unknown) => unknown
) {
  try {
    const { data } = await request();
    await onSuccess(data);
  } catch (err) {
    if (axios.isAxiosError<TErrorModel>(err) && err.response) {
      const handler = onStatus[err.response.status];
      if (handler) {
        await handler(err.response.data);
        return;
      }
    }
    await onError(err);
  }
}
