package com.pulse.dialogs;

import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.os.CountDownTimer;

/**
 * Created by lomo1 on 14.01.2017.
 */
public class FallDetectedDialog extends DialogFragment {

    public interface FallDialogListener {
        void onDialogPositiveClick(DialogFragment dialog, CountDownTimer timer);
        void timeTick(DialogFragment dialog, long timeLeft);
        void timeFinished(DialogFragment dialog);
    }

    FallDialogListener listener;

    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {

        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());

        final CountDownTimer timer = new CountDownTimer(10000, 100) {
            @Override
            public void onTick(long millisUntilFinished) {
                listener.timeTick(FallDetectedDialog.this, millisUntilFinished);
            }

            @Override
            public void onFinish() {
                listener.timeFinished(FallDetectedDialog.this);
            }
        }.start();

        builder.setMessage("I think you have fallen.\nAre you okay?\n00:10:0").setPositiveButton("Yes, I'm fine.", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int id) {
                listener.onDialogPositiveClick(FallDetectedDialog.this, timer);
            }
        }).setTitle("Possible fall detected!");

        return builder.create();
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);

        try {
            listener = (FallDialogListener) context;
        } catch(ClassCastException e) {
            throw new ClassCastException(context.toString() + "must implement FallDialogListener");
        }
    }
}
