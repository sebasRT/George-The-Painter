import { useReducer, useRef, useState, type ChangeEventHandler, type FocusEventHandler, type FormEventHandler, type InputHTMLAttributes } from "react"

export interface FreeEstimateInfo {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  services: string[],
  projectDetails: string,
}
type Action = { type: "add"; payload: string } | { type: "remove"; payload: string }

const reducer = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
}

const GetFreeEstimateForm = () => {
  const [formState, setFormState] = useState<"filling" | "pending" | "successful" | "failed">("filling")
  const [services, dispatch] = useReducer(reducer, [""])

  const requestFreeEstimate: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    setFormState("pending")

    const formData = new FormData(e.currentTarget);

    const { firstName, lastName, phone, email, projectDetails } = Object.fromEntries(formData);

    const body: FreeEstimateInfo = {
      firstName: firstName.toString(),
      lastName: lastName.toString(),
      phone: phone.toString(),
      email: email.toString(),
      services,
      projectDetails: projectDetails.toString(),
    }

    const res = await fetchData(body)
    if (!res.ok) { setFormState("failed"); return }
    setFormState("successful")
  }


  switch (formState) {
    case "filling":
      return <Filling submitHandler={requestFreeEstimate} dispatch={dispatch} />
        ;
    case "pending":
      return <Pending />
    case "successful":
      return <Successful />
    case "failed":
      return <Failed />
    default:
      break;

  }
}

const Filling = ({  submitHandler, dispatch }: { submitHandler: FormEventHandler<HTMLFormElement>, dispatch: React.Dispatch<Action> }) => (
  <>
    <h1 className="text-3xl sm:text-4xl mx-10 font-semibold my-5">
      Let's create your <span className="text-emerald-600">Free Estimate</span> !
    </h1>
    <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 mx-10" >
      <div>
        <h2 className="font-bold text-lg">What's your name?</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <Input required minLength={3} placeholder="First Name" name="firstName" />
          <Input minLength={3} placeholder="Last Name" name="lastName" />
        </div>
        <h2 className="font-bold mt-10 text-lg">Your contact information</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <Input required minLength={5} placeholder="Phone" type="tel" name="phone" />
          <Input minLength={3} placeholder="Email" type="email" name="email" />
        </div>
        <h2 className="font-bold mt-10 text-lg">Which services do you require?</h2>

        <ServicesSelector dispatch={dispatch} />
      </div>
      <div className="max-w-md">
        <h2 className="font-bold text-lg">Project details</h2>
        <textarea name="projectDetails" id="" rows={5} className="border-2 outline-none valid:border-emerald-500 w-full resize-none" required></textarea>
        {/* <h2 className="font-bold mt-10 text-lg">What's your budget? <span className="text-base font-semibold"> ( optional )</span></h2>
        <div className="flex gap-3">
          <span>From</span>
          <input type="text" className="w-12 border-b-2 outline-none focus-visible:border-gray-700 " required name="budget-from" />
          <span>to</span>
          <input type="text" className="w-12 border-b-2 outline-none focus-visible:border-gray-700 " required name="budget-to" />
        </div> */}
        <p className="text-center w-full max-w-xs text-xs mx-auto my-10">By clicking next or submit you agree to receive phone, email, or text communication from us.</p>
        <button type="submit" className="block mx-auto px-5 rounded-full text-white font-bold tracking-wider bg-emerald-500 mb-10" >SUBMIT</button>

      </div>
    </form>
  </>
)


const Successful = () => (
  <div className="grid w-full h-full place-items-center text-center">
    <div className="flex flex-col items-center gap-20 px-5">
      <span className="text-4xl sm:text-5xl font-bold">
        Your request was submitted <span className="text-emerald-600">successfully</span> !
      </span>
      <span className="max-w-md text-xl font-semibold">
        We'll get in touch with you soon to gather all the details of the project and ensure an <b className="text-emerald-500">accurate + fair fare</b> .
      </span>
    </div>
  </div>
)

const Pending = () => (
  <div className="grid w-full h-full place-items-center text-emerald-500 text-9xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path strokeDasharray="60" strokeDashoffset="60" strokeOpacity="0.3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" /></path><path strokeDasharray="15" strokeDashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></g></svg>
  </div>
)

const Failed = () => (
  <div className="grid w-full h-full place-items-center text-center">
    <div className="flex flex-col items-center gap-20 px-5">
      <span className="text-3xl sm:text-4xl font-bold">
        We couldn't process your request.
      </span>
      <span className="max-w-md text-2xl font-semibold">
        We invite you to contact us directly through our <span className="text-emerald-500">communication channels</span>:
      </span>
      <div className="text-emerald-500 text-5xl">
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-5 ">
              <a href="https://api.whatsapp.com/send?phone=19738865345">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
              </a>
              <a href="tel:19738865345">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10" /><path d="M17.543 9.704A5.99 5.99 0 0 1 18 12h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704" /></g></svg>
              </a>
            </div>
            <a href="tel:19738865345" className="text-base text-gray-800">(973)886-5345</a>
          </div>
          <a href="mailto:info@george-the-painter.com" >
            <div className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" fillOpacity="0.15" d="M477.5 536.3L135.9 270.7l-27.5-21.4l27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0" /><path fill="currentColor" fillOpacity="0.15" d="m876.3 198.8l39.3 50.5l-27.6 21.5l27.7-21.5l-39.3-50.5z" /><path fill="currentColor" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-94.5 72.1L512 482L190.5 232.1zm54.5 38.7V792H136V270.8l-27.6-21.5l27.5 21.4l341.6 265.6a55.99 55.99 0 0 0 68.7 0zl27.6-21.5l-39.3-50.5h.1l39.3 50.5z" /></svg>
              <span className="text-base text-gray-800">us@gtp.art</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

const ServicesSelector = ({ dispatch }: { dispatch: React.Dispatch<Action> }) => {
  const handler: ChangeEventHandler<HTMLInputElement> = (e) => {

    if (e.currentTarget.checked) { dispatch({ type: "add", payload: e.currentTarget.value }) }
    else { dispatch({ type: "remove", payload: e.currentTarget.value }) }

  }

  return (
    <div className="flex flex-wrap gap-3 w-full py-5">
      <ServiceCheckbox value="interior painting" onChange={handler} />
      <ServiceCheckbox value="exterior painting" onChange={handler} />
      <ServiceCheckbox value="drywall repair" onChange={handler} />
      <ServiceCheckbox value="power washing" onChange={handler} />
      <ServiceCheckbox value="others" onChange={handler} />
    </div>
  )
}

const ServiceCheckbox = ({ value, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <div className="relative w-fit h-fit flex gap-2 px-2 items-center border has-[:checked]:border-emerald-500 group">
    <input type="checkbox"{...props} value={value} className="opacity-0 absolute w-full h-full" />
    <span className="whitespace-nowrap">{value}</span>
    <svg className="hidden group-has-[:checked]:block group-has-[:checked]:text-emerald-500 " xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm11.95 6.796a1 1 0 0 0-1.414-1.415l-4.95 4.95l-2.121-2.121a1 1 0 1 0-1.415 1.414l2.758 2.758a1.1 1.1 0 0 0 1.556 0z" /></g></svg>
    <svg className="text-gray-500/20 group-has-[:checked]:hidden" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2" /></svg>
  </div>
)


const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {

  const input = useRef<HTMLDivElement>(null)


  const validate: FocusEventHandler<HTMLInputElement> = (event) => {
    if (!event.currentTarget.validity.valid) { ; event.currentTarget.reportValidity(); return }
    if (event.currentTarget.validity.valid) { input.current?.classList.replace("border-red-500", "border-emerald-500");input.current?.classList.add("has-[:valid]:border-emerald-500"); return }
  }

  return (
    <div className=" p-2 w-fit border-2 has-[:focus]:border-gray-600" ref={input}>
      <input className="bg-transparent outline-none" onBlur={validate} autoComplete="off" autoFocus={false}  {...props} />
    </div>
  )

}

const fetchData = async (body: FreeEstimateInfo) => {
  const bodyJson = JSON.stringify(body)
  
  try {
    const res = await fetch("/api/free-estimate-request.json", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: bodyJson
    }
    )
    return res
  } catch (error: any) {
    throw new Error(error)
  }
}

export default GetFreeEstimateForm