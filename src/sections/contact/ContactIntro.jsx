import { Clock, MapPin } from 'lucide-react';

/**
 * Left side contact introduction.
 */
export function ContactIntro({ introduction, availability, location, labels }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="max-w-lg text-body-lg text-muted">{introduction}</p>

      <div className="flex flex-col gap-3 text-sm text-muted">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Clock className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-caption text-muted">{labels.availabilityLabel}</p>
            <p className="font-medium text-foreground">{availability}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-caption text-muted">{labels.locationLabel}</p>
            <p className="font-medium text-foreground">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
