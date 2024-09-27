import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHelperService } from '../services/admin/authHelper.service';

@Injectable({
  providedIn: 'root'
})
export class SubadminGuard implements CanActivate {
  constructor(private rout: Router, private authService: AuthHelperService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user = this.authService.currentUser;
    if (user.admin ) return true;

    this.rout.navigate(["admin"]);
    return false;

  }
  
}
