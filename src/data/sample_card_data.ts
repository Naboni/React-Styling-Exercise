import { ICardProps } from "../types/ICardProps";

export const cardData: ICardProps[] = [
    {
        name: "James Hiddleston",
        first_name: "James",
        last_name: "Hiddleston",
        current_title: "Machine Learning Engineer",
        location: "San Francisco, Bay Area",
        phone_number: "555-555-5555",
        personal_email: "james@gmail.com",
        linkedIn: "https://www.linkedin.com/in/jamesjiddleston",
        experience: [
            {
                title: "Machine Learning Engineer at Google",
                img: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ29zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                date: new Date("2023-01-01")
            },
            {
                title: "Senior Python Developer at Palantir",
                img: "https://images.unsplash.com/photo-1669220235918-04cbf9e054b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFsYW50aXIlMjBsb2dvc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                date: new Date("2022-05-01")
            }
            
        ],
        education: [
            {
                title: "University of California, Berkeley",
                img: "https://images.unsplash.com/photo-1638909374742-8c8364010106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VW5pdmVyc2l0eSUyMG9mJTIwQ2FsaWZvcm5pYSUyQyUyMEJlcmtlbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                date: new Date("2018-02-06")
            },
            {
                title:  "Bachelor of Science, Computer Science",
                img: "https://images.unsplash.com/photo-1638909375462-b64197c9741a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VW5pdmVyc2l0eSUyMG9mJTIwQ2FsaWZvcm5pYSUyQyUyMEJlcmtlbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                date: new Date("2020-06-12")
            }
        ],
    },
    {
        name: "John Doe",
        first_name: "John",
        last_name: "Doe",
        current_title: "Software Engineer",
        location: "San Francisco, CA",
        phone_number: "555-555-5555",
        personal_email: "johndoe@gmail.com",
        linkedIn: "https://www.linkedin.com/in/johndoe",
        experience: [
            {
                title:  "Software Engineer at Facebook",
                img: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                date: new Date("2016-05-04")
            },
            {
                title:  "Software Engineer at Google",
                img: "https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ29zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                date: new Date("2019-01-01")

            },
            {
                title:  "Software Engineer at Bloomberg",
                img: "https://images.unsplash.com/photo-1634471697860-cda48d30fe56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxvb21iZXJnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                date: new Date("2021-09-09")
            },
           
            
            
        ],
        education: [
            {
                title:  "Bachelor of Science, Computer Science",
                img: "https://images.unsplash.com/photo-1642052503331-0681f75bca55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymxvb21iZXJnfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                date: new Date("2022-11-05")
            },
        ],
    },
]