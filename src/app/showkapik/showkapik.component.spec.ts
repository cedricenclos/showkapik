import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ShowkapikComponent } from './showkapik.component'

describe('ShowkapikComponent', () => {
  let component: ShowkapikComponent
  let fixture: ComponentFixture<ShowkapikComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowkapikComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowkapikComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
