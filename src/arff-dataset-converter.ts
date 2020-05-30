import {ArffAttributeType} from './arff-attribute-type.enum';
import {Dataset} from './dataset.model';
import {ArffAttribute} from './arff-attribute.model';
import {ArffDataset} from './arff.dataset';

export class ArffDatasetConverter {
    /**
     * Converts the given dataset to an {@link ArffDataset} instance
     * @param dataset - the dataset to convert
     * @param relationName - how to name the relation
     * @returns an {@link ArffDataset} instance
     */
    public static convertToARFFDataset(dataset: Dataset<any>, relationName: string): ArffDataset {
        const arffDataset = new ArffDataset();
        arffDataset.relation = relationName;

        // the attributes
        let attributeNames: string[] = dataset.getFeatureNames();
        let attributeTypes: ArffAttribute[] = dataset.getARFFAttributeTypes();

        for(let i: number = 0; i < attributeNames.length; i++) {
            arffDataset.attributes.push({
                name: attributeNames[i],
                type: attributeTypes[i].type,
                values: attributeTypes[i].values,
                format: attributeTypes[i].format
            });
        }

        // add the class itself as last attribute
        arffDataset.attributes.push({
            name: dataset.getClassName(),
            type: ArffAttributeType.ENUM,
            values: dataset.getDistinctClasses()
        });

        arffDataset.data = this.generateARFFData(dataset);

        return arffDataset;
    }

    /**
     * Converts the data for the instances themselves (for {@link ArffDataset.data}).
     * @param dataset - the dataset to use
     * @returns the converted data rows
     */
    private static generateARFFData(dataset: Dataset<any>): any[] {
        const attributeNames: string[] = dataset.getFeatureNames();

        // the data
        const instances: any[][] = dataset.getAttributeValues();
        const classes: string[] = dataset.getClassValues();

        const arffData = [];

        for(let i: number = 0; i < instances.length; i++) {
            const arffDataInstance: any = {};
            const attributeValues: any[] = instances[i];

            for(let j: number = 0; j < attributeNames.length; j++) {
                const attributeName: string = attributeNames[j];
                const attributeValue: any = attributeValues[j];
                arffDataInstance[attributeName] = attributeValue;
            }

            // the class has to be the last attribute
            const instanceClass: string = classes[i];
            arffDataInstance[dataset.getClassName()] = instanceClass;
            arffData.push(arffDataInstance);
        }
        return arffData;
    }
}
