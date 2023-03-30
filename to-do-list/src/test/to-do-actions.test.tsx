import { addItem } from "../redux/actions/to-do-actions"

test("addItem action creator return expected action",()=>{
    const expectedAction = {
       type:"Add_Item",
       payload:{
        id:new Date().getTime().toString(),
        title:"Pritisha"
       }
    }
    expect(addItem("Pritisha")).toEqual(expectedAction);
 })
