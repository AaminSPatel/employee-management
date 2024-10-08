
import { useEffect,useState } from "react"


// It has inline css
   const emp = [
                    {
                        EmployeeId:1,
                        Name:'Shubham',
                        Role:'Full-Stack Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'A',
                        Gender:'male',
                        Rank:'3Star',
                    },
                    {
                        EmployeeId:2,
                        Name:'Aamin',
                        Role:'Full-Stack Developer',
                        Dob:'05-07-2005',
                        Mob:'91930253095',
                        Team:'A',
                        Gender:'male',
                        Rank:'4Star',
                    },
                    {
                        EmployeeId:3,
                        Name:'Aman Patel',
                        Role:'Java Developer',
                        Dob:'04-08-2003',
                        Mob:'91930253095',
                        Team:'B',
                        Gender:'male',
                        Rank:'1Star',
                    },
                    {
                        EmployeeId:4,
                        Name:'Asif Patel',
                        Role:'Web Designer',
                        Dob:'11-02-2001',
                        Mob:'919302088025',
                        Team:'C',
                        Gender:'male',
                        Rank:'2Star',
                    },
                    {
                        EmployeeId:5,
                        Name:'Asha',
                        Role:'Python Developer',
                        Dob:'31-01-2005',
                        Mob:'919304588025',
                        Team:'A',
                        Rank:'3Star',
                        Gender:'female',
                    },
                    {
                        EmployeeId:6,
                        Name:'Balram Singh',
                        Role:'UI/UX Designer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'D',
                        Gender:'male',
                        Rank:'4Star',
                    },
                    {
                        EmployeeId:7,
                        Name:'Priya',
                        Role:'React Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'B',
                        Gender:'female',
                        Rank:'3Star',
                    },
                    {
                        EmployeeId:8,
                        Name:'Mahesh',
                        Role:'Android Developer',
                        Dob:'08-05-2002',
                        Mob:'919302088025',
                        Team:'C',
                        Gender:'male',
                        Rank:'4Star',
                    },
                    {
                        EmployeeId:9,
                        Name:'Bandu Gurjar',
                        Role:'Web Designer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'A',
                        Gender:'male',
                        Rank:'1Star',
                    },
                    {
                        EmployeeId:10,
                        Name:'Henry',
                        Role:'Flutter Developer',
                        Dob:'08-04-2003',
                        Mob:'919302084654',
                        Team:'D',
                        Gender:'male',
                        Rank:'2Star',
                    },
                    {
                        EmployeeId:11,
                        Name:'Lary Page',
                        Role:'Full-Stack Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'B',
                        Gender:'male',
                        Rank:'3Star',
                    },
                    {
                        EmployeeId:12,
                        Name:'Deepak Rawat',
                        Role:'Python Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'C',
                        Gender:'male',
                        Rank:'4Star',
                    },
                    {
                        EmployeeId:13,
                        Name:'Rohit',
                        Role:'Flutter Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'A',
                        Gender:'male',
                        Rank:'1Star',
                    },
                    {
                        EmployeeId:14,
                        Name:'Richa',
                        Role:'Full-Stack Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Rank:'2Star',
                        Team:'D',
                        Gender:'female',
                    },
                    {
                        EmployeeId:15,
                        Name:'Deepika',
                        Role:'MERN Developer',
                        Dob:'08-04-2003',
                        Rank:'3Star',
                        Mob:'919302088025',
                        Team:'B',
                        Gender:'female',
                    },
                    {
                        EmployeeId:16,
                        Name:'Priyanka',
                        Role:'Wordpress Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'B',
                        Gender:'female',
                        Rank:'4Star',
                    },
                    
                    {
                        EmployeeId:17,
                        Name:'Sara',
                        Role:'Android Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'A',
                        Rank:'1Star',
                        Gender:'female',
                    },
                    {
                        EmployeeId:18,
                        Name:'Moana',
                        Role:'Project Manager',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'C',
                        Rank:'3Star',
                        Gender:'female',
                    },
                    {
                        EmployeeId:19,
                        Name:'Shivi',
                        Role:'MERN Developer',
                        Rank:'2Star',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'D',
                        Gender:'female',
                    },
                    {
                        EmployeeId:20,
                        Name:'Ram',
                        Role:'Full-Stack Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Rank:'1Star',
                        Team:'B',
                        Gender:'male',
                    },
                    {
                        EmployeeId:21,
                        Name:'Sakil',
                        Role:'UI/UX Designer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Rank:'4Star',
                        Team:'C',
                        Gender:'male',
                    },
                    {
                        EmployeeId:22,
                        Name:'Nikita',
                        Role:'C/C++ Developer',
                        Dob:'08-04-2003',
                        Rank:'3Star',
                        Mob:'919302088025',
                        Team:'C',
                        Gender:'female',
                    },
                    {
                        EmployeeId:23,
                        Name:'Monika',
                        Role:'C/C++ Developer',
                        Dob:'08-04-2003',
                        Rank:'2Star',
                        Mob:'919302088025',
                        Team:'A',
                        Gender:'female',
                    },
                    {
                        EmployeeId:24,
                        Name:'Raja',
                        Rank:'1Star',
                        Role:'React Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'B',
                        Gender:'male',
                    },
                    {
                        EmployeeId:25,
                        Name:'Arjun',
                        Rank:'4Star',
                        Role:'Angular Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'D',
                        Gender:'male',
                    },
                    {
                        EmployeeId:26,
                        Name:'Ravi',
                        Role:'Php Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Rank:'3Star',
                        Team:'C',
                        Gender:'male',
                    },
                    {
                        EmployeeId:27,
                        Name:'Shivani',
                        Role:'Project Manager',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Rank:'2Star',
                        Team:'A',
                        Gender:'female',
                    },
                    {
                        EmployeeId:28,
                        Name:'Ranu',
                        Role:'Full-Stack Developer',
                        Dob:'08-04-2003',
                        Mob:'919302088025',
                        Team:'D',
                        Rank:'1Star',
                        Gender:'female',
                    },
                    
]


export default emp