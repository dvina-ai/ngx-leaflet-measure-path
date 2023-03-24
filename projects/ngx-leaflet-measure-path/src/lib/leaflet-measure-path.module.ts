/**
 * @license
 * Copyright Kant Yazılım A.Ş. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://rilke.ist/license
 */

import { NgModule } from '@angular/core';

import { LeafletMeasurePathDirective } from './core/leaflet-measure-path.directive';

@NgModule({
	exports: [LeafletMeasurePathDirective],
	declarations: [LeafletMeasurePathDirective],
})
export class LeafletMeasurePathModule {}
