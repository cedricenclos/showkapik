import { Component, OnInit } from '@angular/core'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'showkapik-showkapik',
  templateUrl: './showkapik.component.html',
  styleUrls: ['./showkapik.component.scss'],
})
export class ShowkapikComponent implements OnInit {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'youtube',
      sanitizer.bypassSecurityTrustResourceUrl('assets/resources/icons/youtube.svg')
    )
    iconRegistry.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/resources/icons/twitter.svg')
    )
    iconRegistry.addSvgIcon(
      'twitch',
      sanitizer.bypassSecurityTrustResourceUrl('assets/resources/icons/twitch.svg')
    )
    iconRegistry.addSvgIcon(
      'circle-slice',
      sanitizer.bypassSecurityTrustResourceUrl('assets/resources/icons/circle-slice.svg')
    )
  }

  ngOnInit() {}
}
