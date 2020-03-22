import { Component, OnInit } from '@angular/core';
import { TokensService } from 'src/app/services/tokens.service';
import { Token } from 'src/app/models/token';

@Component({
  selector: 'app-tokens-index',
  templateUrl: './tokens-index.component.html',
  styleUrls: ['./tokens-index.component.sass']
})
export class TokensIndexComponent implements OnInit {

  tokens: Token[];
  creatingToken = false;

  constructor(private tokensService: TokensService) {
    this.tokens = [];
  }

  ngOnInit(): void {
    this.loadRecords();
  }

  loadRecords(): void {
    this.tokensService.index().subscribe(r => {
      this.tokens = r;
    });
  }

  createToken(): void {
    this.creatingToken = true;
    this.tokensService.create().subscribe(r => {
      this.loadRecords();
      this.creatingToken = false;
    });
  }

  deleteToken(token: Token): void {
    this.tokensService.delete(token.id).subscribe(r => {
      this.loadRecords();
    });
  }
}
