import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';

export enum ReportFrequency {
    ThirtyMinutes = '30 minutes',
    OneHour = '1 hour',
    ThreeHours = '3 hours',
    SixHours = '6 hours',
    TwelveHours = '12 hours',
    TwentyFourHours = '24 hours',
}

@Component({
    selector: 'app-schedule',
    standalone: true,
    imports: [SharedModule, CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './schedule.component.html',
    styleUrl: './schedule.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent {
    reportFrequencies = Object.keys(ReportFrequency);
    ReportFrequency = ReportFrequency;

    selectedCity: any;

    cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
}
