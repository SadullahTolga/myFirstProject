import { NgIf } from '@angular/common';
import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {SlideMenuModule} from 'primeng/slidemenu';
@Component({
  selector: 'app-heading-navi',
  templateUrl: './heading-navi.component.html',
  styleUrls: ['./heading-navi.component.css']
})
export class HeadingNaviComponent implements OnInit {
   employerItems:MenuItem[]
  candidateItems:MenuItem[];
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
                  label:'Active Job Advertisement',
                  icon:'pi pi-fw pi-file',
                  routerLink:"activeJobAdvertisement"
               },
               {
                  label:'Add Job Advertisement',
                  icon:'pi pi-fw pi-plus',
                  routerLink:"/job-advertisement"
                  
               },
               {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
               },
   
            ]
         },
         
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
            
               {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
               },
               {
                  separator:true
               },
   
            ]
         },
         {
            separator:true
         },
         
{
   label:'CV Processors',
   icon:'pi pi-fw pi-file',
   items:[ 
      {label:'Candidate CV Add',
      icon:'pi pi-fw pi-align-justify',
      routerLink:"cv"

      },
      {label:'Candidate CV View',
      icon:'pi pi-fw pi-align-justify',

      },
      
      {label:'Candidate Personal Information',
      icon:'pi pi-fw pi-align-justify',
      items:[
         {
            label:'Candidate School Information',
            icon:'pi pi-fw pi-align-justify',
            routerLink:"/candidate-school"
         },
      
         {
            label:'Candidate Skill Information',
            icon:'pi pi-fw pi-align-justify',
            routerLink:"candidate-skill"
   
         },
         {
            label:'Candidate Languages Information',
            icon:'pi pi-fw pi-align-justify',
            routerLink:"candidate-languages"
            
         },
         {
            label:'Candidate Job Experiences Information',
            icon:'pi pi-fw pi-align-justify',
            routerLink:" candidate-jobExperiences"
           
         },
         {
            label:'Candidate Account Information',
            icon:'pi pi-fw pi-align-justify',
            items:[
               {
                  label:'GitHub',
                  icon:'pi pi-fw pi-file',
                  routerLink:"/candidate-gitHub"
               },
               {
                  label:'LınkedIn',
                  icon:'pi pi-fw pi-file',
                  routerLink:"/candidate-LınkedIn"
               }
   
            ]
           
         },
         {
            label:'Candidate Images Information',
            icon:'pi pi-fw pi-align-justify',
            routerLink:"image-upload"
           
         }
         
      ]
      },
      
    

   ]
}

         
         


         
     ];
      
   
    
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
}
