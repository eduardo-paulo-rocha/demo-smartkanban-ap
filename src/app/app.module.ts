import { AutoCompleteModule, DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { MapsAllModule } from '@syncfusion/ej2-angular-maps';

import { ChartAllModule, AccumulationChartAllModule, RangeNavigatorAllModule } from '@syncfusion/ej2-angular-charts';

import { TextBoxModule, NumericTextBoxModule, NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

import { CheckBoxModule, ButtonAllModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';

import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';

import { KanbanAllModule } from '@syncfusion/ej2-angular-kanban';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KanbanBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NumericTextBoxModule,
    MapsAllModule,
    AutoCompleteModule,
    DashboardLayoutModule,
    KanbanAllModule,
    CheckBoxModule,
    SidebarModule,
    ButtonAllModule,
    TextBoxModule,
    ChartAllModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    BrowserModule,
    DropDownListAllModule,
    DialogModule,
    NumericTextBoxAllModule,
    TextBoxAllModule,
    CheckBoxAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
