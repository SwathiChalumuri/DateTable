import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table = [
    {
      ProductName: "DoraeMon",
      CompanyName: "Epoch Co",
      ManufacDate: "12-05-2018",
      ExpiryDate: "",
      //Validity : ""
    },
    {
      ProductName: "Nobita Nobi",
      CompanyName: "Epoch Co",
      ManufacDate: "12-06-2017",
      ExpiryDate: "",
     // Validity : ""
    },
    {
      ProductName: "Shizuka Minamoto",
      CompanyName: "Epoch Co",
      ManufacDate: "12-07-2012",
      ExpiryDate: "",
      //Validity : ""
    },
    {
      ProductName: "Suneo Honekawa",
      CompanyName: "Epoch Co",
      ManufacDate: "12-08-2019",
      ExpiryDate: "",
      //Validity : ""
    },
    {
      ProductName: "Mini-Doras",
      CompanyName: "Epoch Co",
      ManufacDate: "12-09-2019",
      ExpiryDate: "",
      //Validity : ""
    }
  ];
  displayedColumns: string[] = ['ProductName', 'CompanyName', 'ManufacDate', 'ExpiryDate','Validity'];
  dataSource = this.table;
  // now: moment.Moment;
 
  
  newdate: moment.Moment;  
  z: string;
 
  constructor() {
  }

  ngOnInit() {
    // console.log(this.table);
    //this.now=moment('12-09-2019');
    // console.log('hello world', this.now.add('years',3).format('Do MMMM YYYY'));

    this.table.map(x=>{
      x['Validity']="";
      return x;
    })
    //var newdate = moment().format('DD-MM-YYYY');
    console.log(this.newdate);

    this.table.forEach(x => {
     
      x.ExpiryDate = moment(x.ManufacDate).format('MM-DD-YYYY');

      
       this.z=moment(x.ExpiryDate).add('years', 2).format('DD-MM-YYYY');

      x.ManufacDate = moment(x.ManufacDate).format('Do MMMM YYYY');
      x.ExpiryDate = moment(x.ExpiryDate).add('years', 2).format('Do MMMM YYYY');
     // console.log('Difference is ', this.newdate.diff(this.z));

     var date = moment(this.z)
    var now = moment();

    if (now < date) 
    {
   console.log("past");
   x['Validity']="Not Expired";
    } 
    else 
    {
      console.log("future");
      x['Validity']="Expired";
    }


  //   var isAfter = moment(date).isAfter(now);
  //   console.log(isAfter);
  //  if(isAfter)
  //  x['Validity']="Not Expired";
  //  else
  //  x['Validity']="Expired";


      // if(z < this.newdate){
      //   x['Validity']=" Expired";
      //  }
      // else{
      //  x['Validity']=" Not Expired";
      //  }

      return x;
    })
    

    console.log(this.table)
  
  }


}
