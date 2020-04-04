import {ArffNamedAttribute} from './arff-named-attribute.model';

/**
 * Representation of a data set in the ARFF file format for mapping purposes.
 */
export class ArffDataset {

    /** The name of the relation (dataset).*/
    relation: string = '';

    /** The list of attributes of the relation. */
    attributes: ArffNamedAttribute[] = [];

    /** The data points (rows) itself. */
    data: any[] = [];

    constructor(params?: ArffDataset) {
        Object.assign(this, params);
    }
}
