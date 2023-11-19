import { StatusResponse } from '../interfaces/API.interface';
import { IQuestion } from '../interfaces/Question.interface';

class BlissAPI {
  baseURL =
    'https://private-anon-bd962f17a8-blissrecruitmentapi.apiary-mock.com';

  getHealthStatus(): Promise<StatusResponse> {
    return fetch(`${this.baseURL}/health`).then((res) => res.json());
  }

  getQuestions(filter?: string): Promise<IQuestion[]> {
    return fetch(
      `${this.baseURL}/questions${filter ? `?filter=${filter}` : ''}`,
    ).then((res) => res.json());
  }

  getQuestion(id?: number | string): Promise<IQuestion> {
    return fetch(`${this.baseURL}/questions/${id}`).then((res) => res.json());
  }

  updateQuestion(data: IQuestion): Promise<IQuestion> {
    return fetch(`${this.baseURL}/questions/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  sendEmail(email: string, url: string): Promise<StatusResponse> {
    return fetch(
      `${this.baseURL}/share?destination_email=${email}&content_url=${url}`,
      {
        method: 'POST',
      },
    ).then((res) => res.json());
  }
}

export const blissApi = new BlissAPI();
