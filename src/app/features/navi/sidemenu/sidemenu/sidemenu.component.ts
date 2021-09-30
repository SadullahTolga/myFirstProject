import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  employerItems:MenuItem[]
  candidateItems:MenuItem[];
  systemEmployerItems:MenuItem[];
  constructor() { }

  ngOnInit(): void {
   
      this.employerItems = [
         {
            label:'Position',
            
           
            icon:'pi pi-fw pi-file',
            items:[
               {
                  label:'Position List',
                  icon:'pi pi-fw pi-file',
                  routerLink:"/department"
               },
               {
                  label:'Position Add',
                  icon:'pi pi-fw pi-plus',
                  routerLink:"/department-add"
               },
               {
                  separator:true
               },
             
            ]
         },
         {
            label:'Candidate Processors',
            icon:'pi pi-fw pi-file',
            items:[
               {
                  label:'Candidate List',
                  icon:'pi pi-fw pi-file',
                  routerLink:"/candidate"},
               {
                  label:'Job Advertisement',
                  icon:'pi pi-fw pi-file',
                  routerLink:"/activeJobAdvertisement"
               },
               {
                  label:'Add Job Advertisement',
                  icon:'pi pi-fw pi-plus',
                  routerLink:"/job-advertisement"
                  
               },
               
   
            ]
         },
         {
            label:"Employer Information",
            icon:"pi pi-fw  pi-align-justify",
            routerLink:"/employerInformation"
            
         }
         
     ];
       
   

   
      this.candidateItems = [
         {
            label:'Employer',
            
           
            icon:'pi pi-fw pi-file',
            items:[
               {
                  label:'Employer List',
                  icon:'pi pi-fw pi-file',
                  routerLink:"/employer"
               },
              
               {
                  separator:true
               },
             
            ]
         },
         {
            label:'Job Advertisement Processors',
            icon:'pi pi-fw pi-file',
            items:[
               
               {
                  label:'Active Job Advertisement',
                  icon:'pi pi-fw pi-file',
                  routerLink:"/activatedJobAdvertisement"
               },
            
            
              
   
            ]
         },
         {
            label:'Favorite Job Advertisement',
            icon:'pi pi-fw pi-chevron-right ',
            routerLink:"/favoriteJA"
         },
        
         
{
   label:'CV Processors',
   icon:'pi pi-fw  pi-file',
   items:[ 
      {label:'Candidate CV Transactions',
      icon:'pi pi-fw pi-align-justify',
      routerLink:"/cvInformation"

      },
      {label:'Candidate CV View',
      icon:'pi pi-fw pi-align-justify',
      routerLink:"/cv-view"
      },
      
      
      
    

   ]
}

         
         


         
     ];
      
   this.systemEmployerItems=[
     {
      label:'Unverified JA',
      icon:'pi pi-fw pi-align-justify',
      routerLink:"/unverifiedJA"
     
     },

     {
      label:'Unverified Employer Update',
      icon:'pi pi-fw pi-align-justify',
      routerLink:"/employerUpdateVerified"
     
     }
             

   ]
    
  }
 
 
 
 
 
  checkUser():boolean{
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }

  checkEmployer(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('employer')) {
         
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  checkCandidate(): boolean {
    if (this.checkUser()) {
      let user = JSON.parse(localStorage.getItem('user'));
      let role = user.message;
      if (role.includes('candidate')) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  checkSystemEmployer(): boolean {
   if (this.checkUser()) {
     let user = JSON.parse(localStorage.getItem('user'));
     let role = user.message;
     if (role.includes('systemEmployee')) {
        
       return true;
     } else {
       return false;
     }
   } else {
     return false;
   }
 }
}