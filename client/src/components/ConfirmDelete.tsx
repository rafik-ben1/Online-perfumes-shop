import { Button } from "./ui/button"
import {  DialogClose, DialogContent } from "./ui/dialog"

type ConfirmDeleteProps = {
    type : "delete" | "confirm",
    action : ()=> void,
    disabled : boolean,
    accessKey : string
}

const ConfirmDelete = ({ type,action,disabled,accessKey} : ConfirmDeleteProps ) => {
    const variant = type === "confirm" ? "default" : "destructive" 
  return  (
   <>
  <DialogContent accessKey={accessKey}>
    <div className="flex flex-col gap-1" >
        <h2 className=" font-semibold text-slate-900 " > Are you sure ? </h2>
     <p className=" text-stone-400" >This action cannot be undone, click confirm to continue</p>   
     <div className="flex items-center justify-end gap-3" >
        <DialogClose asChild >
        <Button disabled={disabled} variant="outline" >Cancel</Button>
        </DialogClose>
        <Button disabled={disabled} onClick={action} variant={variant} > Confirm </Button>
     </div>
    </div>
    </DialogContent>
  </>
  )
}

export default ConfirmDelete