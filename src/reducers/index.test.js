import reducer from './index'
import * as types from '../actions/types'

describe(' reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        data:[],
        isloading:false,
        haserror:"",
        counter:0
      }
    )
  })
})