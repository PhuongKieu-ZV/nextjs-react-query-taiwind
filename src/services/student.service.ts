import { AxiosResponse } from 'axios'
import { IStudent } from '../interfaces/student'
import APIService from './base.service'

export default class StudentService {
  static getStudents(): Promise<AxiosResponse> {
    return APIService.get('/students', {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
  }

  static addStudent = (student: Omit<IStudent, 'id'>) =>
    APIService.post<IStudent>('/students', student)
}
