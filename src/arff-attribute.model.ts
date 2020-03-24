/**
 * Representation for an attribute in the ARFF file format for mapping purposes.
 */
import {ArffAttributeType} from './arff-attribute-type.enum';

export class ArffAttribute {
    /** The name of the attribute. Has to equal the name of the attribute in the JSON object. */
    name: string = '';

    /** The type of the attribute, e.g. 'numeric' */
    type: ArffAttributeType = ArffAttributeType.NUMERIC;

    /** The format of the attribute, e.g. for a date it could be 'MM/DD/YY' */
    format?: string;

    /** The possible values of the attribute, e.g. when it is of the 'enum' type. */
    values?: string[];

    constructor(params?: ArffAttributeType) {
        Object.assign(this, params);
    }
}
