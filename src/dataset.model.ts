import {ArffAttribute} from './arff-attribute.model';

/**
 * Mapper object which helps to convert data to the {@link ArffDataset} format
 */
export abstract class Dataset<T> {

    protected dataset: T[];

    protected excludedFeatureNames: string[] = [];

    /**
     * @param d - the dataset
     */
    protected constructor(d: T[], excludedFeatureNames?: string[]) {
        this.dataset = d;

        if(excludedFeatureNames != null) {
            this.excludedFeatureNames = excludedFeatureNames;
        }
    }

    /**
     * @returns the name of the available classes
     */
    public abstract getDistinctClasses(): string[];

    /**
     * @returns the name of the class/label
     */
    public abstract getClassName(): string;

    /**
     * @returns the name for each attribute excluding the {@link excludedFeatureNames}
     */
    public abstract getFeatureNames(): string[];

    /**
     * @returns the attribute type for each attribute
     */
    public abstract getARFFAttributeTypes(): ArffAttribute[];

    /**
     * @returns the attribute values (= the data itself) for each row of the data set excluding the values for the excluded features
     */
    public abstract getAttributeValues(): any[][];

    /**
     * @returns the class label for each row of the dataset
     */
    public abstract getClassValues(): any[];

    public getDataset() {
        return this.dataset.slice();
    }

    public excludeFeature(featureName: string): void {
        this.excludedFeatureNames.push(featureName);
    }
}
