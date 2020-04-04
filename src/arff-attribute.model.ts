import {ArffAttributeType} from './arff-attribute-type.enum';

export class ArffAttribute {

    /** The type of the attribute, e.g. 'numeric' */
    type: ArffAttributeType = ArffAttributeType.NUMERIC;

    /** The possible values of the attribute, e.g. when it is of the {@link ArffAttributeType.ENUM} type. */
    values?: string[];

    /** The format of the attribute, e.g. for a date it could be 'MM/DD/YY' */
    format?: string;

    constructor(params?: ArffAttribute) {
        Object.assign(this, params);
    }
}
