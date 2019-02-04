import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgentProfileComponent implements OnInit, OnDestroy {
  /**
   * @param {Array<>} listPerson: Define some person
   * @param {string} url : "Url image when upload"
   * @param { number } activeTab: "change tab active"
   * @param { Boolean } submitted: "Change submitted to true or false",
   * @param { Object } person: "All data of person has id thi param"
   * @param { Arra<>} listLanguage : "list Language of this user"
   * @param {FormGroup} formExperience
   * @param {FormGroup} formEducation
   * @param {FormGroup} formReview
   */

  formGroup: FormGroup;
  formExperience:FormGroup;
  formEducation:FormGroup;
  formReview:FormGroup;
  url = '';
  activeTab = 0;
  submitted = false;
  listPerson = [];
  person;
  multiUpload: boolean = false;

  /** List All Cities and defined selected city */
  listCities = ['Ho Chi Minh', 'Ha Noi', 'Da Nang'];
  selectedCity = 'Ha Noi';

  /**List All Districts and defined selected district */
  listDistricts = ['Quan 1', 'Quan 2', 'Quan 3'];
  selectedDistrict = 'Quan 1';

  listLang = ['English', 'Vietnamese'];
  listLangOfUser = ['English'];
  modal: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.listPerson = [
      {
        id: 1,
        name: 'Nghiem Tran Thuy Thuy',
        connections: 56,
        email: 'thuy.nguyen@gmail.com',
        address: 'Vinhomes Central Park , 208 Nguyen Huu Canh',
        city: 'Ho Chi Minh',
        district: 'Quan 1',
        exp: [
          {
            image: '/assets/images/exp.png',
            title: 'Senior Product Designer',
            description: 'Interactivelabs',
            time: 'May 2015 – Present - 3 yrs 2 mos',
            country: 'USA',
            link: ''
          },
          {
            image: '/assets/images/exp.png',
            title: 'Senior Product Designer',
            description: 'Interactivelabs',
            time: 'May 2015 – Present - 3 yrs 2 mos',
            country: 'Viet Nam',
            link: 'hosiana.vn'
          },
          {
            image: '/assets/images/exp.png',
            title: 'Senior Product Designer',
            description: 'Interactivelabs',
            time: 'May 2015 – Present - 3 yrs 2 mos',
            country: 'Silicon',
            link: 'hosiana.vn'
          }
        ],
        education: [
          {
            image: '/assets/images/exp.png',
            title: 'University of Natural Science',
            description: 'Information Technology',
            time: '2007 - 2011',
            position: 'Software Enineer'
          }
        ],
        recommend: [
          {
            received: [
              {
                image: '/assets/images/01x.png',
                title: 'Nghiem Tran Thuy Thuy',
                job: 'CEO at FPT Asia Pacific March 29, 2009',
                description: 'Dung worker with Thomas in the same group',
                content: `<p style="color:red">I have known Dung in a variety of capacities for many years. We has been 
								  working in FPT Software together.</p>
							  <br>
							  <p>I have known Dung in a variety of capacities for many years. We has been 
								  working in FPT Software together.I have known Dung in a variety of apacities for many years. We has been working in FPT Software together
							  </p>`
              }
            ],
            given: [
              {
                image: '/assets/images/01x.png',
                title: 'Nghiem Tran Thuy Thuy',
                job: 'CEO at FPT Asia Pacific March 29, 2009',
                description: 'Dung worker with Thomas in the same group',
                content: `<p style="color:red">I have known Dung in a variety of capacities for many years. We has been 
								  working in FPT Software together.</p>
							  <br>
							  <p>I have known Dung in a variety of capacities for many years. We has been 
								  working in FPT Software together.I have known Dung in a variety of apacities for many years. We has been working in FPT Software together
							  </p>`
              },
              {
                image: '/assets/images/01x.png',
                title: 'Nghiem Tran Thuy Nguyen',
                job: 'CEO at FPT Hosiana March 29, 2009',
                description: 'Dung worker with Thomas in the same group',
                content: `<p style="color:red">I have known Dung in a variety of capacities for many years. We has been 
								  working in FPT Software together.</p>
							  <br>
							  <p>I have known Dung in a variety of capacities for many years. We has been 
								  working in FPT Software together.I have known Dung in a variety of apacities for many years. We has been working in FPT Software together
							  </p>`
              }
            ]
          }
        ]
      }
    ];
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let result = this.listPerson.find(data => data.id === id);
    if (result) {
      this.person = result;
    }
  }

  showPopup(content) {
    this.modal = this.modalService.open(content, { size: 'lg', backdropClass: 'modalEdit' });
  }
  /**
   *
   * @param {Fn} changeTabActive : Change tab active when click
   */
  changeTabActive(id) {
    this.activeTab = id;
  }

  submit() {
    this.submitted = true;
  }
 

  /**
   * @param {Fn} deleteAvatarValue : "Delete image when preview upload"
   */
  deleteAvatarValue() {
    this.formGroup.get('file').setValue(null);
    this.formGroup.get('file').setErrors({ required: true });
  }
  changeCheckbox(event) {
    let colFile = this.formGroup.get('language');
  }

  /**
   * Delete formControl value for the form
   * 
   */
  delete(form) {
    form.reset();
  } 

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      phone: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      language: [null, Validators.required],
      file: [null, Validators.required],
      address: [null],
      district: [null],
      city: [null]
    });
    this.formExperience = this.fb.group({
      title       : [null, Validators.required],
      company     : [null, Validators.required],
      location    : [null, Validators.required],
      from        : [null, Validators.required],
      to          : [null, Validators.required],
      working     : [null],
      description : [null, Validators.required]
    });
    this.formEducation = this.fb.group({
      school      : [null, Validators.required],
      degree      : [null],
      study       : [null],
      from        : [null],
      to          : [null],
      description : [null]
    });
    this.formReview = this.fb.group({
      relationship: ["",Validators.required],
      position: ["", Validators.required],
      review: [null, Validators.required]
    });
    this.formGroup.controls['city'].setValue(this.selectedCity, { onlySelf: true });
    this.formGroup.controls['district'].setValue(this.selectedDistrict, { onlySelf: true });
  }
  ngOnDestroy() {
    if(this.modal)  {
        this.modal.close();
    }
  }
}
