/**
 * Representation for an attribute in the ARFF file format for mapping purposes.
 */
import {ArffAttribute} from './arff-attribute.model';

export class ArffNamedAttribute extends ArffAttribute {
    /** The name of the attribute. Has to equal the name of the attribute in the JSON object. */
    name: string = '';

    constructor(params?: any) {
        super(params);
        Object.assign(this, params);
    }
}
