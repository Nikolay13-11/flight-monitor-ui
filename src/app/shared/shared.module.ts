import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        ButtonModule,
        DropdownModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        ButtonModule,
        DropdownModule,
    ],
})
export class SharedModule {}
