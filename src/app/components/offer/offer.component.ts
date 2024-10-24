import { CommonModule } from '@angular/common';
import { OfferService } from './../../services/offer.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent implements OnInit{
  offerData:any[]=[];

  constructor(private OfferService:OfferService){}
  getOffer(){
    this.OfferService.getAlloffer().subscribe((res)=>{
      this.offerData=res.data
    })
  }
  ngOnInit(): void {
    this.getOffer();
    console.log(this.offerData)
  }
}
