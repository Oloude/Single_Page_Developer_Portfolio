 import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";


function ContactForm() {
const [formData, setFormData] = useState({
  nameData : {
    name : '',
    error : ''
  },
  emailData : {
    email : '',
    error : ''
  },
  messageData : {
    message : '',
    error : ''
  }
})

function handleNameChange(value: string){
  setFormData(prev => {
    return {
      ...prev,
      nameData : {
        ...prev.nameData,
        name : value
      }
    }
  })
}

function handleEmailChange(value: string){
  setFormData(prev => {
    return {
      ...prev,
      emailData : {
        ...prev.emailData,
        email : value
      }
    }
  })
}

function handleMessageChange(value: string){
  setFormData(prev => {
    return {
      ...prev,
      messageData : {
        ...prev.messageData,
        message : value
      }
    }
  })
}

function handleFormSubmit(e:React.FormEvent){
  e.preventDefault()

   setFormData(prev => ({
    ...prev,
    nameData: { ...prev.nameData, error: "" },
    emailData: { ...prev.emailData, error: "" },
    messageData: { ...prev.messageData, error: "" },
  }));

  if(!formData.nameData.name){
    setFormData(prev => {
      return {
        ...prev ,
        nameData : {
          ...prev.nameData,
          error : 'please name input can not be empty'
        }
      }
    })

    return
  }

  if(!formData.messageData.message){
    setFormData(prev => {
      return {
        ...prev ,
        messageData : {
          ...prev.messageData,
          error : 'please textarea  can not be empty'
        }
      }
    })

    return
  }

  if(!formData.emailData.email ){
    setFormData(prev => {
      return {
        ...prev ,
        emailData : {
          ...prev.emailData,
          error : 'please email input can not be empty'
        }
      }
    })

    return
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


  if(!regex.test(formData.emailData.email)){
    setFormData(prev => {
      return {
        ...prev ,
        emailData : {
          ...prev.emailData,
          error : 'please input a valid email'
        }
      }
    })

    return
  }
  setFormData({
    nameData: { name: "", error: "" },
    emailData: { email: "", error: "" },
    messageData: { message: "", error: "" },
  });
}

console.log(formData)

  return (
   <form onSubmit={handleFormSubmit} action="" className="flex flex-col gap-8 mb-20" noValidate>
    <div className="flex flex-col gap-2 ">
      <div className={`${formData.nameData.error ? 'border-b-red-600' : 'border-b-grey'} flex gap-6 justify-between items-center border-b  pb-4 px-4`}>
        <input onChange={(e)=> handleNameChange(e.target.value)} value={formData.nameData.name} type="text" placeholder="Name" className="text-base font-medium text-grey uppercase outline-none"/>
        { formData.nameData.error && <MdErrorOutline className="text-red-600 w-4 h-4"/>}
      </div>
      <span className="self-end text-red-600 text-sm italic">{formData.nameData.error}</span>
    </div>
    <div className="flex flex-col gap-2">
      <div className={`${formData.emailData.error ? 'border-b-red-600' : 'border-b-grey'} flex gap-6 justify-between items-center border-b  pb-4 px-4`}>
        <input onChange={(e)=> handleEmailChange(e.target.value)} value={formData.emailData.email} type="email" placeholder=" Email" className="text-base font-medium text-grey uppercase outline-none"/>
       { formData.emailData.error && <MdErrorOutline className="text-red-600 w-4 h-4"/>}
      </div>
      <span className="self-end text-red-600 text-sm italic">{formData.emailData.error}</span>
    </div>
    <div className="flex flex-col gap-2">
      <div className={`${formData.messageData.error ? 'border-b-red-600' : 'border-b-grey'} flex gap-6 justify-between items-center border-b  pb-4 px-4`}>
        <textarea onChange={(e)=> handleMessageChange(e.target.value)} value={formData.messageData.message} name="" id="" placeholder="Message" className="text-base font-medium text-grey uppercase w-full outline-none resize-none" cols={30} rows={6}> </textarea>
        { formData.messageData.error && <MdErrorOutline className="text-red-600 w-4 h-4"/>}
      </div>
      <span className="self-end text-red-600 text-sm italic">{formData.messageData.error}</span>
    </div>
    <button className="text-base text-white  text-center self-end leading-[26px] font-bold uppercase relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green after:-bottom-2.5 after:left-0">Send message</button>
   </form>
  )
}

export default ContactForm